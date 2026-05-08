# `dataGoogleVmwareengineUpgrades` Submodule <a name="`dataGoogleVmwareengineUpgrades` Submodule" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVmwareengineUpgrades <a name="DataGoogleVmwareengineUpgrades" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/vmwareengine_upgrades google_vmwareengine_upgrades}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

new dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades(scope: Construct, id: string, config: DataGoogleVmwareengineUpgradesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig">DataGoogleVmwareengineUpgradesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig">DataGoogleVmwareengineUpgradesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleVmwareengineUpgrades resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.isConstruct"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.isTerraformElement"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.isTerraformDataSource"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.generateConfigForImport"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleVmwareengineUpgrades resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleVmwareengineUpgrades to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleVmwareengineUpgrades that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/vmwareengine_upgrades#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleVmwareengineUpgrades to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.upgrades">upgrades</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList">DataGoogleVmwareengineUpgradesUpgradesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `upgrades`<sup>Required</sup> <a name="upgrades" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.upgrades"></a>

```typescript
public readonly upgrades: DataGoogleVmwareengineUpgradesUpgradesList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList">DataGoogleVmwareengineUpgradesUpgradesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVmwareengineUpgradesConfig <a name="DataGoogleVmwareengineUpgradesConfig" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

const dataGoogleVmwareengineUpgradesConfig: dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.parent">parent</a></code> | <code>string</code> | The resource name of the private cloud for which upgrades will be listed. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/vmwareengine_upgrades#id DataGoogleVmwareengineUpgrades#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.name">name</a></code> | <code>string</code> | The resource name of the specific Upgrade to retrieve. If provided, the 'upgrades' list will contain only this upgrade. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The resource name of the private cloud for which upgrades will be listed.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/vmwareengine_upgrades#parent DataGoogleVmwareengineUpgrades#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/vmwareengine_upgrades#id DataGoogleVmwareengineUpgrades#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name of the specific Upgrade to retrieve. If provided, the 'upgrades' list will contain only this upgrade.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/vmwareengine_upgrades#name DataGoogleVmwareengineUpgrades#name}

---

### DataGoogleVmwareengineUpgradesUpgrades <a name="DataGoogleVmwareengineUpgradesUpgrades" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgrades"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgrades.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

const dataGoogleVmwareengineUpgradesUpgrades: dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgrades = { ... }
```


### DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades <a name="DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

const dataGoogleVmwareengineUpgradesUpgradesComponentUpgrades: dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades = { ... }
```


### DataGoogleVmwareengineUpgradesUpgradesSchedule <a name="DataGoogleVmwareengineUpgradesUpgradesSchedule" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesSchedule.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

const dataGoogleVmwareengineUpgradesUpgradesSchedule: dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesSchedule = { ... }
```


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

const dataGoogleVmwareengineUpgradesUpgradesScheduleConstraints: dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints = { ... }
```


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

const dataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals: dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals = { ... }
```


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

const dataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime: dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime = { ... }
```


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

const dataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime: dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime = { ... }
```


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

const dataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange: dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange = { ... }
```


### DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

const dataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow: dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow = { ... }
```


### DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

const dataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows: dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows = { ... }
```


### DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

const dataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime: dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList <a name="DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

new dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

new dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.property.componentType">componentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades">DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `componentType`<sup>Required</sup> <a name="componentType" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.property.componentType"></a>

```typescript
public readonly componentType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades">DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades</a>

---


### DataGoogleVmwareengineUpgradesUpgradesList <a name="DataGoogleVmwareengineUpgradesUpgradesList" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

new dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareengineUpgradesUpgradesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareengineUpgradesUpgradesOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

new dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.componentUpgrades">componentUpgrades</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList">DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.estimatedDuration">estimatedDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList">DataGoogleVmwareengineUpgradesUpgradesScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.startVersion">startVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.targetVersion">targetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgrades">DataGoogleVmwareengineUpgradesUpgrades</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `componentUpgrades`<sup>Required</sup> <a name="componentUpgrades" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.componentUpgrades"></a>

```typescript
public readonly componentUpgrades: DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList">DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `estimatedDuration`<sup>Required</sup> <a name="estimatedDuration" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.estimatedDuration"></a>

```typescript
public readonly estimatedDuration: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.schedule"></a>

```typescript
public readonly schedule: DataGoogleVmwareengineUpgradesUpgradesScheduleList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList">DataGoogleVmwareengineUpgradesUpgradesScheduleList</a>

---

##### `startVersion`<sup>Required</sup> <a name="startVersion" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.startVersion"></a>

```typescript
public readonly startVersion: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `targetVersion`<sup>Required</sup> <a name="targetVersion" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.targetVersion"></a>

```typescript
public readonly targetVersion: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareengineUpgradesUpgrades;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgrades">DataGoogleVmwareengineUpgradesUpgrades</a>

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

new dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

new dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime</a>

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

new dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

new dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.endDay">endDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.endTime">endTime</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.startDay">startDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endDay`<sup>Required</sup> <a name="endDay" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.endDay"></a>

```typescript
public readonly endDay: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.endTime"></a>

```typescript
public readonly endTime: DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList</a>

---

##### `startDay`<sup>Required</sup> <a name="startDay" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.startDay"></a>

```typescript
public readonly startDay: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.startTime"></a>

```typescript
public readonly startTime: DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals</a>

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

new dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

new dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime</a>

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

new dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

new dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.disallowedIntervals">disallowedIntervals</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.minHoursDay">minHoursDay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.minHoursWeek">minHoursWeek</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.rescheduleDateRange">rescheduleDateRange</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disallowedIntervals`<sup>Required</sup> <a name="disallowedIntervals" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.disallowedIntervals"></a>

```typescript
public readonly disallowedIntervals: DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList</a>

---

##### `minHoursDay`<sup>Required</sup> <a name="minHoursDay" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.minHoursDay"></a>

```typescript
public readonly minHoursDay: number;
```

- *Type:* number

---

##### `minHoursWeek`<sup>Required</sup> <a name="minHoursWeek" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.minHoursWeek"></a>

```typescript
public readonly minHoursWeek: number;
```

- *Type:* number

---

##### `rescheduleDateRange`<sup>Required</sup> <a name="rescheduleDateRange" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.rescheduleDateRange"></a>

```typescript
public readonly rescheduleDateRange: DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints</a>

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

new dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

new dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange</a>

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

new dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

new dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow">DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow">DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow</a>

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleList <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleList" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

new dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

new dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.constraints">constraints</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.editWindow">editWindow</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList">DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.lastEditor">lastEditor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.weeklyWindows">weeklyWindows</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList">DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesSchedule">DataGoogleVmwareengineUpgradesUpgradesSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `constraints`<sup>Required</sup> <a name="constraints" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.constraints"></a>

```typescript
public readonly constraints: DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList</a>

---

##### `editWindow`<sup>Required</sup> <a name="editWindow" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.editWindow"></a>

```typescript
public readonly editWindow: DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList">DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList</a>

---

##### `lastEditor`<sup>Required</sup> <a name="lastEditor" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.lastEditor"></a>

```typescript
public readonly lastEditor: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `weeklyWindows`<sup>Required</sup> <a name="weeklyWindows" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.weeklyWindows"></a>

```typescript
public readonly weeklyWindows: DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList">DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareengineUpgradesUpgradesSchedule;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesSchedule">DataGoogleVmwareengineUpgradesUpgradesSchedule</a>

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

new dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

new dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList">DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows">DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.startTime"></a>

```typescript
public readonly startTime: DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList">DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows">DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows</a>

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

new dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareengineUpgrades } from '@cdktn/provider-google'

new dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime">DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime">DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime</a>

---



